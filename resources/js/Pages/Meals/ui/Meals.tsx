
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { type MealProp } from '@/Pages/Meals/ui/Meals.d'
import { PageProps } from '@/types'
import AddMealModal from '../partials/AddMealModal'
import { Head } from '@inertiajs/react'
import Pagination from '@/Components/Pagination'
import DeleteItem from '@/Components/DeleteItem'
import EditMealModal from '../partials/EditMealModal'

export default function Meals({ auth, meals }: PageProps<MealProp>) {
  console.log(meals.data, 'meals')
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Meals
          </h2>
          <div className="flex gap-2">
            <AddMealModal />
          </div>
        </div>
      }
    >
      <Head title="meals" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Name
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Phone
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Menu
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900">
                        Address
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 dark:text-gray-100 text-sm bg-gray-100 dark:bg-gray-900 text-right w-36">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meals?.data?.map(meal => {
                      return (
                        <tr key={meal.id}>
            
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {meal.name}
                          </td>

                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {meal.price}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            {meal.description}
                          </td>
                          <td className="border-b border-gray-200 dark:border-gray-900 px-4 py-3">
                            <div className="flex gap-1 justify-end">
                              {/* <EditMealModal meal={meal} /> */}
                              <DeleteItem route={route('meals.destroy', meal.id)} />
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {/* <Pagination links={meals.meta.links} />x */}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
