
import React from "react"
import styled from "styled-components"
import { rand } from "../../helpers/rand"
import { sizeCube } from "../../theme/sizes"

const Cube = ({ offset, height, textures }) => {

	const faceStyles = [

		`translate3d(${ -sizeCube / 2 }px, ${ sizeCube / 2 }px, ${ height }px)`, // Top
		`translate3d(${ -sizeCube / 2 }px, ${ -sizeCube / 2 }px, 0) rotateZ(180deg) rotateX(-90deg)`, // North
		`translate3d(0, 0, 0) rotateZ(-90deg) rotateX(-90deg)`, // East
		`translate3d(${ -sizeCube / 2 }px, ${ sizeCube / 2 }px, 0) rotateZ(0deg) rotateX(-90deg)`, // South
		`translate3d(${ -sizeCube / 1 }px, 0, 0) rotateZ(90deg) rotateX(-90deg)`, // South
	]

	return (

		<Faces offset={ offset }>
		{
			faceStyles.map((transform, i) =>

				<Face
					key={ `${ i }` }
					height={ i === 0 ? sizeCube : height }
					transform={ transform }
					texture={ i === 0 ? textures.top : textures.side }
				>{ i + 1 }</Face>
			)
		}
		</Faces>
	)
}

const Faces = styled.ul`

	position: absolute;
	width: ${ sizeCube }px;
	height: ${ sizeCube }px;
	left: ${ ({ offset }) => offset.x }px;
	top: ${ ({ offset }) => offset.y }px;
`
const Face = styled.li`

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 60px;
	position: absolute;
	left: 50%;
	bottom: 50%;
	width: ${ sizeCube }px;
	height: ${ ({ height }) => height }px;
	transform: ${ ({ transform }) => transform };
	transform-origin: center bottom;
	background: url(${ ({ texture }) => require(`../../images/textures/${ texture }`) }) center top repeat-y;
	background-size: cover;
`

export default Cube
