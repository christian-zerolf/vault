const $taskForm = document.querySelector('form');
const $taskInput = document.querySelector('#task-input');
const $tasklist = document.querySelector('#task-list');

const addTask = () => {
	const taskText = $taskInput.value.trim();

	if (taskText.length > 0) {
		const taskObject = {
			text: taskText,
			completed: false,
		};

		tasks.push(taskObject);
		updateTaskList();
		saveTasks();
		$taskInput.value = '';
	}
};

const updateTaskList = () => {
	$tasklist.innerHTML = '';
	tasks.forEach((task, taskIndex) => {
		const taskItem = createTaskItem(task, taskIndex);
		$tasklist.append(taskItem);
	});
};

const createTaskItem = (task, taskIndex) => {
	const taskId = 'task-' + taskIndex;
	const $taskItem = document.createElement('li');
	const taskText = task.text;
	$taskItem.className = 'task';
	$taskItem.innerHTML = `
    <input id="${taskId}" type="checkbox" />
		<label class="custom-checkbox" for="${taskId}">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
				<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
			</svg>
		</label>

		<label class="task-text" for="${taskId}">${taskText}</label>

		<button class="remove-task">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
				<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
			</svg>
		</button>
  `;
	const removeTask = $taskItem.querySelector('.remove-task');
	removeTask.addEventListener('click', () => {
		removeTaskItem(taskIndex);
	});
	const checkbox = $taskItem.querySelector('input');
	checkbox.addEventListener('change', () => {
		tasks[taskIndex].completed = checkbox.checked;
		saveTasks();
	});
	checkbox.checked = task.completed;
	return $taskItem;
};

const removeTaskItem = (taskIndex) => {
	tasks = tasks.filter((_, i) => i !== taskIndex);
	saveTasks();
	updateTaskList();
};

const saveTasks = () => {
	const tasksJson = JSON.stringify(tasks);
	localStorage.setItem('tasks', tasksJson);
};

const getTasks = () => {
	const tasks = localStorage.getItem('tasks') || '[]';
	return JSON.parse(tasks);
};

let tasks = getTasks();
updateTaskList();

$taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addTask();
});
