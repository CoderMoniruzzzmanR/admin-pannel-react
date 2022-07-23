import React from 'react'
import ContentHeader from 'src/components/common/ContentHeader';


const pageTitle = "Dashboard Overview";

function DashboardOverview() {
  return (
    <>
      <ContentHeader
      pageTitle={pageTitle}
      />
      <div>
         DashboardOverview
      </div>
    </>
  )
}

export default DashboardOverview