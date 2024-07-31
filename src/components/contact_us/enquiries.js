import React from "react"
import styled from "styled-components"
import { H2, Text } from "../../elements/text"

const Container =styled.div`
    flex-direction: column;
    display: flex;
    gap: 50px;
    width: 200px;
`

const EachElement = styled.div`
    flex-direction: column;
    display: flex;
    gap: 5px;
    text-align: left;
`



export const Enquiries = () =>{
    return(<Container>
        <EachElement>
            <H2 value="Enquiries" height="25px"/>
            <Text value="enquiry@nesta.live" height="25px"></Text>
        </EachElement>
        <EachElement>
        <H2 value="Sales"  height="25px" />
        <Text value="sales@nesta.live"  height="25px"></Text>
        </EachElement>
        <EachElement>
        <H2 value="Careers"  height="25px" />
        <Text value="careers@nesta.live" height="25px" ></Text>
        </EachElement>
        <EachElement>
        <H2 value="Call Us" height="25px" />
        <Text value="1800-100-100" height="25px" ></Text>
        </EachElement>
    </Container>)
}