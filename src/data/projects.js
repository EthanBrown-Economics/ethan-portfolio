export const projects = [
  {
    slug: "airbnb-price-prediction",
    published: true,
    title: "Airbnb Price Prediction Model",
    category: "Machine Learning / Data Science",
    summary: "Built predictive models using Airbnb listing data.",
    tools: ["Python", "scikit-learn", "Kepler.gl"],
    description: "This project uses a dataset of over 100,000 Airbnb listings across more than 30 U.S. cities to analyze and predict listing prices. The goal was to understand the key factors that drive pricing in short-term rental markets and to evaluate the performance of different machine learning models in predicting prices. I implemented and compared six regression approaches — linear regression, Lasso, decision tree, random forest, gradient boosting, and k-nearest neighbors — tuning each with grid search and 5-fold cross-validation before evaluating all six on a held-out test set. The analysis focused on both predictive accuracy and interpretability, with particular attention to feature importance and how factors such as property size, availability, and host history influence price. This project strengthened my ability to work with large, real-world datasets, apply machine learning methods, and interpret results in an economic context.",
    pdf: "/files/airbnb-report.pdf",
    code: "/files/airbnb-code.ipynb",
    data: "https://insideairbnb.com/get-the-data/",
    github: "https://github.com/EthanBrown-Economics/Final-Project-Airbnb-Price-Prediction-Geospatial-Analysis",
    map: "/maps/airbnb-map.html",
    caseStudy: {
      headline: {
        label: "Best model",
        prefix: "R² ",
        value: 0.502,
        decimals: 2,
        description:
          "Random forest explained roughly half of nightly-price variance on held-out listings — a 51% relative improvement in R² over linear regression, with about 14% lower prediction error (RMSE).",
      },
      methodology:
        "All six models were tuned with grid search over 5-fold cross-validation, then scored on the same held-out test split so results are directly comparable.",
      modelComparison: [
        { model: "Random Forest", r2: 0.502, best: true },
        { model: "Gradient Boosting", r2: 0.477 },
        { model: "K-Nearest Neighbors", r2: 0.405 },
        { model: "Decision Tree", r2: 0.384 },
        { model: "Lasso Regression", r2: 0.332 },
        { model: "Linear Regression", r2: 0.332 },
      ],
      featureImportance: [
        { feature: "Bathrooms", importance: 0.136 },
        { feature: "Bedrooms", importance: 0.13 },
        { feature: "Accommodates (guest capacity)", importance: 0.044 },
        { feature: "Availability (365-day)", importance: 0.034 },
        { feature: "Host's total listings", importance: 0.031 },
        { feature: "Reviews per month", importance: 0.028 },
      ],
      featureNote:
        "Feature importance from the random forest model — property size (bathrooms, bedrooms, capacity) dominates, well ahead of host history and review activity.",
    },
  },
  {
    slug: "spotify-dashboard",
    published: false,
    title: "Spotify Listening Dashboard",
    category: "Interactive Dashboard",
    summary:
      "Created an interactive dashboard from personal Spotify streaming history to explore listening trends and user behavior.",
    tools: ["Python", "Dash", "Plotly", "Pandas", "Data Visualization"],
    description:
      "This project parsed Spotify Extended Streaming History files and turned raw listening data into an interactive dashboard. The goal was to make personal data exploratory, visual, and engaging.",
    pdf: "#",
    github: "#",
  },
  {
    slug: "shipyard-sales-analytics",
    published: false,
    title: "Student Bookstore Sales Analytics",
    category: "Business Analytics",
    summary:
      "Analyzed sales, customer, and operations data for Berry College’s student-run bookstore.",
    tools: ["Python", "Excel", "Power BI", "Shopify", "Clover"],
    description:
      "This project connects my role as General Manager of The Shipyard with applied analytics. I worked with sales and customer data to better understand seasonality, conversion, product performance, and operational planning.",
    pdf: "#",
    github: "#",
  },
  {
    slug: "horse-racing-prediction",
    published: false,
    title: "Horse Racing Prediction Project",
    category: "Predictive Modeling",
    summary:
      "Used traditional and GPS-based racing data to evaluate models for race outcome prediction.",
    tools: ["Python", "Machine Learning", "ROC AUC", "Simulation", "Data Cleaning"],
    description:
      "This project explored whether GPS-based horse racing data improved predictive performance over traditional race variables. I worked with messy real-world datasets, tested model performance, and considered how predictions could support a live race simulation tool.",
    pdf: "#",
    github: "#",
  },
];