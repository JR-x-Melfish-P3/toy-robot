import type { FC } from 'react'
import type { Direction } from '../../../../types/robot'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Field from '../../../Field'

const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const

const schema = z.object({
  x: z.number().int().min(0).max(4),
  y: z.number().int().min(0).max(4),
  direction: z.enum(DIRECTIONS),
})

type PlaceForm = z.infer<typeof schema>

interface Props {
  onPlace: (x: number, y: number, direction: Direction) => void
}

const Place: FC<Props> = ({ onPlace }) => {
  const { register, handleSubmit } = useForm<PlaceForm>({
    resolver: zodResolver(schema),
    defaultValues: { x: 0, y: 0, direction: 'NORTH' },
  })

  const onSubmit = ({ x, y, direction }: PlaceForm): void => {
    onPlace(x, y, direction)
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
        Place Robot
      </h2>
      <form
        onSubmit={(e) => void handleSubmit(onSubmit)(e)}
        className="flex items-end gap-3"
      >
        <Field label="X">
          {(id) => (
            <input
              id={id}
              type="number"
              min={0}
              max={4}
              className="w-14 border border-slate-300 rounded-lg px-2 py-2 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('x', { valueAsNumber: true })}
            />
          )}
        </Field>
        <Field label="Y">
          {(id) => (
            <input
              id={id}
              type="number"
              min={0}
              max={4}
              className="w-14 border border-slate-300 rounded-lg px-2 py-2 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('y', { valueAsNumber: true })}
            />
          )}
        </Field>
        <Field label="Direction">
          {(id) => (
            <select
              id={id}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              {...register('direction')}
            >
              {DIRECTIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          )}
        </Field>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Place
        </button>
      </form>
    </div>
  )
}

export default Place
