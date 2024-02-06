import type { Field } from "./field"

export interface Profile {
  id: string
  fields: Field[]
  createdAt: string
  updatedAt: string
}
