import * as React from "react";
import Blog from "../components/Blog";

import Layout from "../layouts";
import SEO from "../layouts/common/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="All posts" />
      {/* Blog section */}
      <section>
        <Blog />
      </section>
    </Layout>
  );
};

export default IndexPage;
