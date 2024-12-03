import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Todo from '../src/Todos/Todo'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi } from 'vitest'


describe('Todo', () => {
  const todo = { _id: '1', text: 'Test', done: false }
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  test('renders Todo', () => {
    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
    const element = screen.getByText('Test')
    expect(element).toBeDefined()
  })


  test('delete Todo', async () => {
    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
    const user = userEvent.setup()
    const button = screen.getByText('Delete')
    await user.click(button)
    expect(deleteTodo.mock.calls).toHaveLength(1)
  })

  test('Todo can be set as done', async() => {
    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
    const user = userEvent.setup()
    const button = screen.getByText('Set as done')
    await user.click(button)
    expect(completeTodo.mock.calls).toHaveLength(1)
  })
})