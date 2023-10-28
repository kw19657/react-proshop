import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>Homepage</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'welcome to proshop',
    description: 'we sell the best product for cheap',
    keywords: 'electronics, buy electronics, cheap electronics'
}

export default Meta