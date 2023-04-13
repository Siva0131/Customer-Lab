import React, { Component } from 'react';

class SamplePage extends Component {


constructor(props){
    super(props);
    this.state = {
        value: 'first_name',
        value: 'last_name',
        value: 'age',
        value: 'gender',
        value: 'first_name',

    }
}

    render() {
        return (
            <div>

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


                        <button>Add More</button>
                
            </div>
        );
    }
}

export default SamplePage;