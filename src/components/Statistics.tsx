import React from "react";
import { Divider, Space } from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import { dividerStyle, statisticsStyle } from "../stylesheets/styles";

interface StatisticsProps {
  all: number;
  completed: number;
  inProgress: number;
}

export const Statistics: React.FC<StatisticsProps> = ({
  all,
  completed,
  inProgress,
}) => {
  const { xs } = useBreakpoint();
  const statistics = statisticsStyle(xs);
  const divider = dividerStyle(xs);
  return (
    <Space style={statistics}>
      All tasks: {all}
      <Divider style={divider} type="vertical" />
      Completed tasks: {completed}
      <Divider style={divider} type="vertical" />
      In progress tasks: {inProgress}
    </Space>
  );
};
