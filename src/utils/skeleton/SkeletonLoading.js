import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletonLoading(props) {
  let skeletonEle = "";
  for (let index = 0; index < 5; index++) {
    skeletonEle +=
      "<Skeleton width={500}/><Skeleton/><Skeleton/><Skeleton/><p></p>";
  }
  return (
    <>
      <div classNa7me="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} baseColor={"#d6d6d6"} align={"center"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} />
            <Skeleton className="col align-self-center " width={"50%"} />
          </div>
        </div>
        <div className="col-4 col-md-4">
          <Skeleton height={250} baseColor={"#d6d6d6"}></Skeleton>
          <Skeleton width={"70%"} baseColor={"#d6d6d6"} />
          <Skeleton width={"50%"} align={"center"} baseColor={"#d6d6d6"} />
          <Skeleton height={1} baseColor={"#d6d6d6"} />
          <div className="col align-self-center">
            <Skeleton width={"50%"} baseColor={"#d6d6d6"} />
            <Skeleton
              className="col align-self-center "
              width={"50%"}
              baseColor={"#d6d6d6"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
