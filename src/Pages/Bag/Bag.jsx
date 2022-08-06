import React, { useState } from "react";
import { onSnapshot, collection} from 'firebase/firestore';
import { db } from '../../firebase';
import { Col, Container, Row } from 'react-bootstrap';
import CardBag from "../../components/CardBag/CardBag";
import { async } from "@firebase/util";

const Bag = () => {

    const [data, setData] = useState([]);
    const baggedItems = []

    const getData = async () =>{
        
        const lsData = JSON.parse(localStorage.getItem('CoctailAvenueBag'));
        lsData.map((e) =>{
            return(
                await db.collection('menu').doc(e.id).get()
            )
        })
        
    }

    

    return (
        <>
            {(() => {
                if((localStorage.getItem('CoctailAvenueBag')===null)){
                }else{
                    <Container>
                        <Row className="g-4">
                        {
                            data.map((info, index) =>{
                            return(
                                <Col key={index} className='d-flex justify-content-center'>
                                    <CardBag data={info}/>
                                </Col>
                            );
                            })
                        }
                        </Row>
                     </Container>
                }
            })}

        </>
        
      )
}

export default Bag;