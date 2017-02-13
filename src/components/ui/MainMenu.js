import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MainMenu = () => {
	return (
			<Navbar collapseOnSelect={true} staticTop={true}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#"><FaHome />Home</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="about">
							<NavItem eventKey={1}>
								About
							</NavItem>
						</LinkContainer>

						<LinkContainer to="afterSchoolProgram">
							<NavItem eventKey={2}>
								After School Program
							</NavItem>
						</LinkContainer>

						<LinkContainer to="summerProgram">
							<NavItem eventKey={3}>
								Summer Program
							</NavItem>
						</LinkContainer>

						<LinkContainer to="weekendProgram">
							<NavItem eventKey={4}>
								Weekend Program
							</NavItem>
						</LinkContainer>

						<LinkContainer to="daySchool">
							<NavItem eventKey={5}>
								Day School
							</NavItem>
						</LinkContainer>

						<LinkContainer to="driversNeeded">
							<NavItem eventKey={6}>
								Drivers Needed
							</NavItem>
						</LinkContainer>

						<LinkContainer to="members">
							<NavItem eventKey={7}>
								Members
							</NavItem>
						</LinkContainer>

						<LinkContainer to="d3Sample">
							<NavItem eventKey={8}>
								Graph
							</NavItem>
						</LinkContainer>

					</Nav>
				</Navbar.Collapse>
			</Navbar>

	)

}

export default MainMenu