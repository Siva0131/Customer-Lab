import { useState } from 'react';

function SamplePage() {
  const [formFields, setFormFields] = useState([
    { name: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  option = [ ], value = [ ] 

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              {/* <input
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <input
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              /> */}

                          <select className="AddSchema">
                            <option disabled selected>Add schema to Segment</option>
                            <option value="first_name">First Name</option>
                            <option value="last_name">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="age">Age</option>
                            <option value="account_number">Account Number</option>
                            <option value="city">City</option>
                            <option value="state">State</option>


                        </select>
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default SamplePage;