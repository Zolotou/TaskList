import React from "react";

type MobileConfig = boolean | undefined;

export const headerStyle = (isMobile: MobileConfig): React.CSSProperties => ({
  textAlign: "center",
  color: "#fff",
  height: isMobile ? 32 : 64,
  paddingInline: isMobile ? 30 : 50,
  lineHeight: isMobile ? "32px" : "64px",
  backgroundColor: "#7dbcea",
});

export const footerStyle = (isMobile: MobileConfig): React.CSSProperties => ({
  textAlign: "center",
  color: "#fff",
  height: isMobile ? 32 : 64,
  backgroundColor: "#7dbcea",
});

export const taskListPageStyle = (
  isMobile: MobileConfig,
): React.CSSProperties => ({
  display: "flex",
  flexDirection: "column",
  padding: isMobile ? "10px" : "20px",
  height: "100%",
});

export const taskAddingFormStyle = (
    isMobile: MobileConfig,
): React.CSSProperties => ({
  display: "flex",
  flexDirection: isMobile ? 'column' : 'row',
  flexWrap: "wrap",
  gap: '10px',
  alignItems: isMobile ? 'center' : 'end',
  justifyContent: 'center',
  padding: isMobile ? "10px" : "20px",
});


export const taskFilterFormStyle = (
    isMobile: MobileConfig,
): React.CSSProperties => ({
  minWidth: '80%',
  display: "flex",
  flexDirection: isMobile ? 'column' : 'row',
  flexWrap: "wrap",
  gap: '5px',
  alignItems: isMobile ? 'center' : 'end',
  justifyContent: 'center',
  padding: isMobile ? "5px" : "10px",
});

export const radioGroupStyle = (
): React.CSSProperties => ({
  width: "100%",
  display: "flex",
  flexDirection:  'row',
  flexWrap: "wrap",
  alignItems: 'center',
  justifyContent: 'center',
});

export const statisticsStyle = (
    isMobile: MobileConfig,
): React.CSSProperties => ({
  marginBottom: '10px',
  flexDirection: isMobile ? 'column' : 'row',
});

export const dividerStyle = (
    isMobile: MobileConfig,
): React.CSSProperties => ({
  border:  isMobile? 'unset' : '1px solid black'
});