import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setJob(data);
        // console.log(job);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPage;
