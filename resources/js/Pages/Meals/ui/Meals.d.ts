export type Meal = {
  id: number
  name: string
  price: number
  description: string
  status: boolean
  created_at: string
  updated_at: string
}

export type MealProp = {
  meals: {
    data: Meal[]
    meta: {
      links: Link[]
    }
  }
}