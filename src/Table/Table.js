import Card from 'react-bootstrap/Card';
import React from 'react';

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import NavBar from '../Components/Navbar/Navbar';

function TableTwo() {
    return (
        <div>
            <NavBar/>
        <Card className="bg-dark text-white">
            <Card.Img src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNvbGxlZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>View Marks</Card.Title>
                <Card.Text>
                    <MDBTable striped bordered hover variant="dark">
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>Name</th>
           <th scope='col'>Course</th>
           <th scope='col'>Branch</th>
           <th scope='col'>Semester</th>
          <th scope='col'>Marks</th>
         </tr>
       </MDBTableHead>
       <MDBTableBody>
         {/* <tr>
           <td>
             <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Alex Ray</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Consultant</p>

                                </td>
                                <td>
                                    gfg
                                </td>
                                <td>Junior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Kate Hunington</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Designer</p>

                                </td>
                                <td>
                                    g
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
           <td>
             <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
           <td>
             <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
           <td>
             <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr>
                            <tr>
           <td>
             <div className='d-flex align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>John Doe</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                    <p className='text-muted mb-0'>IT department</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>Software engineer</p>
                                </td>
                                <td>Senior</td>
                                <td>Senior</td>

                                <td>
                                    <MDBBtn color='link' rounded size='sm'>
                                        Edit
                                    </MDBBtn>
                                </td>
                            </tr> */}
                        </MDBTableBody>
                    </MDBTable>
                </Card.Text>
                
            </Card.ImgOverlay>
        </Card>
        </div>
    );
}

export default TableTwo;