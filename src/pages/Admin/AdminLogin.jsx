import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Login failed')

      localStorage.setItem('adminToken', data.token)
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f6f4f4] px-5 pt-24 pb-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10"
      >
        <div>
          <p className="section-kicker">
            <span className="mr-3 inline-block h-px w-9 bg-msred align-middle" />
            Admin
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight">Sign in</h1>
          <p className="mt-2 text-sm text-black/50">
            Manage jobs and website content.
          </p>
        </div>

        <div>
          <label className="text-sm text-black/50">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none transition focus:border-msred"
          />
        </div>

        <div>
          <label className="text-sm text-black/50">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none transition focus:border-msred"
          />
        </div>

        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-msred px-7 py-3.5 text-sm font-bold text-white transition hover:bg-msredDark disabled:opacity-60"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </section>
  )
}

export default AdminLogin