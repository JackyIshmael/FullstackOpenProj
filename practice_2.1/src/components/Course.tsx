import React from 'react'
import Header from './Header'

interface CourseProps {
  courses: BasicCourseGroup[]
}

interface BasicCourseGroup {
  id: number
  name: string
  parts: CourseInfo[]
}

interface CourseInfo {
  name: string
  exercises: number
  id: number
}

const Course: React.FC<CourseProps> = ({ courses }) => {
  if (!Array.isArray(courses)) {
    return null
  }

  return (
    <div>
      {courses.map((courseGroup) => {
        let sum = 0
        return (
          <div style={{ textAlign: 'left' }} key={courseGroup.id}>
            <Header title={courseGroup.name} />
            {courseGroup.parts?.map((part) => {
              sum += part.exercises
              return (
                <p key={part.id}>
                  {part.name} {part.exercises}
                </p>
              )
            })}
            <p>Number of exercises {sum}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Course
