import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';

const Users = () => {

  const { data: userData, loading } = useGetData('users');

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'><h4 className='fw-bold'>Users</h4></Col>
          <Col lg='12' className='pt-5'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                  {
                    loading ? (
                    <h4 className='pt-5 fw-bold'>Loading ...</h4>
                    ) : (
                      userData?.map(user => (
                        <tr key={user.uid}>
                          <td><img src={user.photoUrl} alt='' /></td>
                          <td>{user.displayName}</td>
                          <td>{user.email}</td>
                          <td><button className='btn btn-danger'>Delete</button></td>
                        </tr>
                      ))
                    )
                  }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Users