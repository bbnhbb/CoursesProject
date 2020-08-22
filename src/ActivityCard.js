import React from "react";
import ActivitySingleCard from "./ActivitySingleCard";

function ActivityCard({ activity }) {
  return (
    <>
      {activity.map((activityData) => (
        <>
          <ActivitySingleCard activityData={activityData} />
        </>
      ))}
    </>
  );
}

export default ActivityCard;
