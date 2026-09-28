import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api'

const emptyForm = {
  title: '',
  department: '',
  location: '',
  type: 'Full-time',
  description: '',
  responsibilities: '',
  requirements: '',
  isActive: true,
}

const toLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

const inputClass =
  'mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-msred'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  // Token ke sath request, 401 par automatically login page par bhej deta hai
  const authFetch = async (path, options = {}) => {
    const token = localStorage.getItem('adminToken')
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (res.status === 401) {
      localStorage.removeItem('adminToken')
      navigate('/admin/login')
      throw new Error('Session expired. Please sign in again.')
    }
    return res
  }

  const loadJobs = async () => {
    try {
      const res = await authFetch('/api/jobs/admin/all')
      const data = await res.json()
      setJobs(data)
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin/login')
      return
    }
    loadJobs()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
  }

  const startEdit = (job) => {
    setEditingId(job._id)
    setForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities.join('\n'),
      requirements: job.requirements.join('\n'),
      isActive: job.isActive,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)

    const payload = {
      ...form,
      responsibilities: toLines(form.responsibilities),
      requirements: toLines(form.requirements),
    }

    try {
      const res = await authFetch(
        editingId ? `/api/jobs/${editingId}` : '/api/jobs',
        {
          method: editingId ? 'PUT' : 'POST',
          body: JSON.stringify(payload),
        }
      )
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to save job')

      setMessage({
        type: 'success',
        text: editingId ? 'Job updated.' : 'Job added.',
      })
      resetForm()
      loadJobs()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setSaving(false)
    }
  }

  const toggleActive = async (job) => {
    try {
      await authFetch(`/api/jobs/${job._id}`, {
        method: 'PUT',
        body: JSON.stringify({ isActive: !job.isActive }),
      })
      loadJobs()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    }
  }

  const deleteJob = async (job) => {
    if (!window.confirm(`Delete "${job.title}"? This cannot be undone.`)) return
    try {
      await authFetch(`/api/jobs/${job._id}`, { method: 'DELETE' })
      if (editingId === job._id) resetForm()
      loadJobs()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    }
  }

  return (
    <section className="min-h-screen bg-[#f6f4f4] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Top bar */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">
              <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
              Admin
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Jobs dashboard
            </h1>
          </div>
          <button
            onClick={logout}
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-bold text-black/70 transition hover:border-msred hover:text-msred"
          >
            Sign out
          </button>
        </div>

        {message && (
          <p
            className={`mt-6 rounded-xl px-4 py-3 text-sm font-semibold ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {message.text}
          </p>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-5">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2"
          >
            <h2 className="text-xl font-black">
              {editingId ? 'Edit job' : 'Add new job'}
            </h2>

            <div>
              <label className="text-sm text-black/50">Job title</label>
              <input name="title" value={form.title} onChange={handleChange} required className={inputClass} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-black/50">Department</label>
                <input name="department" value={form.department} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className="text-sm text-black/50">Type</label>
                <select name="type" value={form.type} onChange={handleChange} className={inputClass}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-black/50">Location</label>
              <input name="location" value={form.location} onChange={handleChange} required className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-black/50">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={3} className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-black/50">Responsibilities (one per line)</label>
              <textarea name="responsibilities" value={form.responsibilities} onChange={handleChange} rows={4} className={inputClass} />
            </div>

            <div>
              <label className="text-sm text-black/50">Requirements (one per line)</label>
              <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={4} className={inputClass} />
            </div>

            <label className="flex items-center gap-3 text-sm font-semibold text-black/70">
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4 accent-[#a3122a]"
              />
              Show this job on the Careers page
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-full bg-msred px-7 py-3 text-sm font-bold text-white transition hover:bg-msredDark disabled:opacity-60"
              >
                {saving ? 'Saving...' : editingId ? 'Update job' : 'Add job'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-black/15 px-6 py-3 text-sm font-bold text-black/70"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* Jobs list */}
          <div className="space-y-4 lg:col-span-3">
            <h2 className="text-xl font-black">All jobs ({jobs.length})</h2>

            {loading && <p className="text-sm text-black/50">Loading...</p>}

            {!loading && jobs.length === 0 && (
              <p className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-black/50">
                No jobs yet. Add your first job using the form.
              </p>
            )}

            {jobs.map((job) => (
              <div
                key={job._id}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black">{job.title}</h3>
                    <p className="mt-1 text-sm text-black/50">
                      {job.department} · {job.location} · {job.type}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      job.isActive
                        ? 'bg-green-50 text-green-700'
                        : 'bg-black/5 text-black/50'
                    }`}
                  >
                    {job.isActive ? 'Live' : 'Hidden'}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => startEdit(job)}
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold text-black/70 transition hover:border-msred hover:text-msred"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => toggleActive(job)}
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold text-black/70 transition hover:border-msred hover:text-msred"
                  >
                    {job.isActive ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => deleteJob(job)}
                    className="rounded-full border border-red-200 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AdminDashboard