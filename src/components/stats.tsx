const stats = [
    {
      value: "50K+",
      label: "average impressions per hashtag burst"
    },
    {
      value: "15%",
      label: "avg. increase in sales within first 30 days"
    },
    {
      value: "30%",
      label: "better engagement on social media after 2 months"
    },
    {
      value: "20+",
      label: "business impacted so far"
    }
  ]
  
  export function Stats() {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The Difference We've Made So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  