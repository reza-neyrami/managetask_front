import React, { useState } from 'react';

function TaskForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('todo');

    const handleSubmit = (event) => {
        event.preventDefault();

        // اینجا شما می‌توانید داده‌های فرم را به سرور ارسال کنید
        console.log({ name, description, startDate, endDate, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                نام:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                توضیحات:
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                تاریخ شروع:
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </label>
            <label>
                تاریخ پایان:
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </label>
            <label>
                وضعیت:
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="todo">برای انجام</option>
                    <option value="doing">در حال انجام</option>
                    <option value="done">انجام شده</option>
                </select>
            </label>
            <input type="submit" value="ایجاد وظیفه" />
        </form>
    );
}

export default TaskForm;
