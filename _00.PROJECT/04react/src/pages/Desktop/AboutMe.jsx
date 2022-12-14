import React from 'react'
import './AboutMe.scss'
import {Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import Mouse from '../../componentsD/Mouse'

const AboutMe = () => {
  const skillList = useSelector(state => state.skills);
  return (
    <div id='aboutMe' className='scrollContainer'>
      <Mouse />
      <div className="top">
        <Row>
          <Col xs={5} className="profileWrap">
            <div className="profileBg"></div>
            <div className="profileImage"></div>
            <h2>About Me</h2>
          </Col>
          <Col xs className="contents">
            <div className="info">
              <div className="profile">
                <h3>PROFILE</h3>
                <Row>
                  <Col xs={4}>Name</Col>
                  <Col xs={8}>강혜리</Col>
                  <Col xs={4}>Birth</Col>
                  <Col xs={8}>1999.03.25</Col>
                  <Col xs={4}>Address</Col>
                  <Col xs={8}>경기도 고양시</Col>
                </Row>
              </div>
              <div className="education">
                <h3>EDUCATION</h3>
                <Row>
                  <Col xs={3}>2023.01</Col>
                  <Col xs={9}>프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정 수료 예정</Col>
                  <Col xs={3}>2022.02</Col>
                  <Col xs={9}>가천대학교 전자공학과 졸업</Col>
                </Row>
              </div>
            </div>
            <div className="texts">
              천리길도 한걸음부터,<br />
              매일 한걸음씩 나아가기 위해 노력하는 <span>강혜리</span>입니다.<br />
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <Row>
          <Col xs={6} className="skills">
            {skillList.map((item,index)=>{
              return (
                <Row key={index}>
                  <Col xs={3}>{item.name}</Col>
                  <Col xs={7} className="skillBar"><span style={{width:item.percent}}></span></Col>
                  <Col xs={2} className="skillPercent">{item.percent}</Col>
                </Row>
              )
            })}
          </Col>
          <Col xs={5} className='skillIndexWrap'>
            <div className="skillBg"></div>
            <h2>Skills</h2>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutMe