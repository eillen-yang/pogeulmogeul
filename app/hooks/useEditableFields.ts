import { useState } from 'react'

export const useEditableFields = (fieldNames: string[]) => {
  const [editableFields, setEditableFields] = useState(
    () =>
      Object.fromEntries(
        fieldNames.map((name) => [name, false]),
      ) as Record<string, boolean>,
  )

  const enable = (field: string) => {
    setEditableFields((prev) => ({
      ...prev,
      [field]: true,
    }))
  }

  const disable = (field: string) => {
    setEditableFields((prev) => ({
      ...prev,
      [field]: false,
    }))
  }

  const toggle = (field: string) => {
    setEditableFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const disableAll = () => {
    setEditableFields((prev) =>
      Object.fromEntries(
        Object.keys(prev).map((key) => [key, false]),
      ),
    )
  }

  return {
    editable: editableFields,
    enable,
    disable,
    toggle,
    disableAll,
  }
}
