import React from 'react'
import { MainContainer, Content, Row, Col, Heading, Container, TitleContainer, Title, ContentContainer } from './pagesOne.styles'

const pagesOne = ({ isSidebarCollapsed }) => {
  return (
    <MainContainer isSidebarCollapsed={isSidebarCollapsed}>
        <Content>
            <Row>
                <Col>
                    <Heading>Example Page One</Heading>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <TitleContainer>
                            <Title>example title </Title>
                            <p>Example subhead</p>
                        </TitleContainer>
                        <ContentContainer>
                            Your content here
                        </ContentContainer>
                    </Container>
                </Col>
            </Row>
        </Content>
    </MainContainer>
  )
}

export default pagesOne