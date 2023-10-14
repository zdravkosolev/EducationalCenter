import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Coursespage } from "../../components/types/coursespage";
import PageTitle from "../../components/elements/PageTitle";
import { FeaturedCourse } from "../../components/types/homepage";
import CourseCard from "../../components/elements/CourseCard";

interface Props {
  data: Coursespage;
  dataCourses: FeaturedCourse[];
}

const Course: NextPage<Props> = ({ data, dataCourses }) => {
  return (
    <div>
      <PageTitle title={data.title} content={data.first_content_block} />

      <div className="container">
        <div className="row mt-5">
          {dataCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/courses_page");
  const data: Coursespage = await res.json();

  const resCourses = await fetch("http://localhost:5001/courses");
  const dataCourses: FeaturedCourse[] = await resCourses.json();

  return {
    props: { data, dataCourses },
  };
};
