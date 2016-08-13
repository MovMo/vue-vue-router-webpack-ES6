export const incrementCounter = ({dispatch, state}) => {
	dispatch('INCREMENT', 1)
}

export const reduceCounter = ({dispatch, state}) => {
	dispatch('reduce', 1)
}
