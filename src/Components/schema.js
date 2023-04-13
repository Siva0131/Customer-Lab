import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { VscCircleFilled } from "react-icons/vsc";
// import { CaretLeftOutlined } from "@ant-design/icons";
import Select from "react-select";




const Schema = () => {

    const [visible, SetVisible] = useState(false);

    const [formElements, SetFormElements] = useState([
        { value: 'first_name', label: 'First Name' },
        { value: 'last_name', label: 'Last Name' },
        
      ]);


   

      const addFeilds = () => {
        let object = [...formElements];
        object[event.target.value] = event.target.value

        // SetFormElements([...formElements])
      }

        
        return(
   
          <div>
            <Button onClick={() => SetVisible(true)} className="SaveSegmentButton">Save Segment</Button>
            <Drawer open={visible} title="Saving Segment" maskClosable={false} closable={true}>
                <label>Enter the Name of the Segment</label>
                <input type="text" placeholder="Name of the segment" className="segment" />

                <p>To save your segment, you need to add the schemas to build the query</p>
                <div className="Icons">

                    <span><VscCircleFilled className="greenIcon" /> - User Traits</span>   <span><VscCircleFilled className="redIcon" /> - Group Traits</span>
                </div>
                <div>

                    <div>
                        <VscCircleFilled className="greenIcon" /><select className="FirstNameDropDown">
                            <option disabled selected>First Name</option>
                        </select>
                    </div>

                    <div>
                        <VscCircleFilled className="redIcon" /><select className="AccountNumberDropdown">
                            <option disabled selected>Account Number</option>
                        </select>
                    </div>

                    <div>

                    <Select options={formElements} />

                        
                    

                        {/* <VscCircleFilled className="greyIcon" /><select className="AddSchema">
                            <option disabled selected>Add schema to Segment</option>
                            <option value="first_name">First Name</option>
                            <option value="last_name">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="age">Age</option>
                            <option value="account_number">Account Number</option>
                            <option value="city">City</option>
                            <option value="state">State</option>


                        </select> */}
                    </div>
                    <Button type="submit" className="ButtonLink" onClick={addFeilds}>+<u>Add new schema</u></Button>


                    <div>
                        <button className="SaveButton">Save the Segment</button>
                        <button onClick={() => SetVisible(false)} className="CancelButton">Cancel</button>
                    </div>


                </div>
            </Drawer>
        </div>
    );
}

export default Schema