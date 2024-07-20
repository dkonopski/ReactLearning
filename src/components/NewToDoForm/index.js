const NewToDoForm = ({onChange, draft, onSubmit}) => (
    <div>
        <input type='text' onChange={onChange} value={draft}/>
        <button onClick={onSubmit}>Add</button>
    </div>
)

export default NewToDoForm