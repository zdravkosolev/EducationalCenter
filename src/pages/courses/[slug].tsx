import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { FeaturedCourse } from "../../components/types/homepage";
import PageTitle from "../../components/elements/PageTitle";
import CourseDetailPage from "../../components/templates/CourseDetailPage";

interface Props {
  data: FeaturedCourse;
}

const CoursePage: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <PageTitle title={data.title} content={data.content} />
      <CourseDetailPage {...data} />
    </div>
  );
};

export default CoursePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const resCourses = await fetch("http://localhost:5001/courses");
  const dataCourses: FeaturedCourse[] = await resCourses.json();

  const paths = dataCourses.map((course) => {
    return {
      params: {
        slug: course.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.slug;

  const res = await fetch(`http://localhost:5001/courses/${id}`);
  const data: FeaturedCourse = await res.json();

  return {
    props: {
      data,
    },
  };
};
