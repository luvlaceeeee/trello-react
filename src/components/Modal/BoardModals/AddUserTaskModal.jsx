import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { addUserToTask } from '../../../API/Service'
import { useBoard, useUser } from '../../../store/store'

const AddUserTaskModal = ({ makers, taskId, refetch }) => {
	const userId = useUser(state => state.id)
	const { boardId } = useParams()

	const users = useBoard(state => state.users)

	const makersId = makers.map(user => user.id)
	console.log(makersId)
	const [isOpen, setOpen] = useState(false)

	const mutation = useMutation(
		['add-user-to-task', userId, boardId, taskId],
		memberId => addUserToTask(userId, boardId, taskId, memberId),
		{
			onSuccess: () => {
				refetch()
			},
		}
	)

	return (
		<div className='relative mx-auto my-20 bg-white rounded-2xl shadow-2xl w-96'>
			<div className='px-6 py-6 lg:px-8'>
				<h3 className='mb-4 text-xl font-bold text-gray-900'>
					Add task members
				</h3>
				<div className='space-y-6'>
					<div>
						<label className='block mb-2 text-sm font-medium text-gray-900'>
							All board members{' '}
						</label>
						<div className='scrollbar flex flex-col h-40 overflow-y-auto overflow-x-hidden'>
							{users.length === 0 ? (
								<span className='font-light text-sm text-zinc-400'>
									No members
								</span>
							) : (
								users.map(user => {
									if (
										makersId.find(makerId => makerId === user.id) === undefined
									) {
										return (
											<div>
												<div
													className={'flex items-center justify-between mb-2'}
												>
													<div className='flex flex-col space-y-2 h-auto'>
														<div className='flex space-x-2 items-center'>
															<img
																className='w-8 h-8 rounded-full'
																src={user.avatar}
																alt=''
															/>
															<span>{user.name + ' ' + user.surname}</span>
														</div>
													</div>
													<button onClick={() => mutation.mutate(user.id)}>
														<FiPlus />
													</button>
												</div>
												<hr />
											</div>
										)
									} else {
										return null
									}
								})
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddUserTaskModal
