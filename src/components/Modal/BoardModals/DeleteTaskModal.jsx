import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { deleteTask } from '../../../API/Service'
import { useUser } from '../../../store/store'
import ButtonLoader from '../../UI/ButtonLoader'

const DeleteTaskModal = ({ refetch, taskId, title, onClick, columnId }) => {
	const userId = useUser(state => state.id)
	const { boardId } = useParams()
	const mutation = useMutation(
		['delete-task', userId, boardId, columnId, taskId],
		() => deleteTask(userId, boardId, columnId, taskId),
		{
			onSuccess: () => {
				onClick(false)
				refetch()
			},
		}
	)

	return (
		<div className='relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96'>
			<div className='px-6 py-6 lg:px-8'>
				<h3 className='text-xl font-bold text-gray-900'>Delete task</h3>
				<div className='space-y-6'>
					<div>
						<label className='block mb-2 text-lg text-gray-900'>
							You want to delete {title} task?
						</label>
					</div>
					<div className='flex justify-between'>
						<span className='block text-sm font-light text-red-400 w-32 break-words'>
							Note! All data will be cleared without the possibility of recovery
						</span>
						<div className='flex justify-end items-center space-x-2.5'>
							<button
								onClick={() => mutation.mutate()}
								className='text-zinc-900 bg-white border-2 border-zinc-900 hover:border-green-200 hover:bg-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300'
							>
								{!mutation.isLoading ? 'Yes' : <ButtonLoader />}
							</button>
							<button
								onClick={() => onClick(false)}
								className='text-white border-2 border-zinc-900 hover:border-red-700 bg-zinc-900 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300'
							>
								No
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteTaskModal
