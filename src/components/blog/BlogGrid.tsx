"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";

const posts = [
  {
    title: "Sport-Related Performance Anxiety in Young Athletes: A Clinical Practice Review",
    excerpt:
      "A comprehensive clinical review examining how performance anxiety manifests in youth athletes, its impact on both performance and well-being, and evidence-based intervention strategies for clinicians and coaches working with young competitors.",
    category: "Research",
    readTime: "15 min read",
    source: "NIH / PMC",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11811592/",
  },
  {
    title: "The Science of Building Athletic Confidence in Youth Athletes",
    excerpt:
      "An exploration of what research reveals about the 'confidence sweet spot' — the optimal challenge level that builds self-belief without creating anxiety. Draws on Csikszentmihalyi's flow research and Guadagnoli's challenge point framework.",
    category: "For Parents",
    readTime: "8 min read",
    source: "Psychology Today",
    href: "https://www.psychologytoday.com/ca/blog/building-momentum/202501/the-science-of-building-athletic-confidence-in-youth-athletes",
  },
  {
    title: "How to Encourage Without Pressuring Your Young Athlete",
    excerpt:
      "Studies show parental expectations can become a significant source of stress for young athletes. This article examines the line between supportive involvement and harmful pressure, with practical communication frameworks for sports parents.",
    category: "For Parents",
    readTime: "7 min read",
    source: "Dr. Paul McCarthy",
    href: "https://www.drpaulmccarthy.com/post/parental-support-in-youth-sports-how-to-encourage-without-pressuring-your-young-athlete",
  },
  {
    title: "The Power of Visualization in Sport: What the Research Actually Shows",
    excerpt:
      "Mental imagery activates the same motor circuits as physical execution — the neural overlap is why visualization accelerates skill acquisition, reduces pre-competition anxiety, and builds confidence that holds up under pressure.",
    category: "Mental Skills",
    readTime: "10 min read",
    source: "Mind Training",
    href: "https://mindtraining.net/articles/visualization-in-sport-what-the-research-shows.php",
  },
  {
    title: "Grit and Athletic Performance: Perseverance and Passion for Long-Term Goals",
    excerpt:
      "Angela Duckworth's foundational research demonstrated that achievement entails not only talent but sustained application of effort over time. This piece explores how grit theory applies specifically to athletic development and sport persistence.",
    category: "Research",
    readTime: "6 min read",
    source: "Trine University — Center for Sports Studies",
    href: "https://trine.edu/academics/centers/center-for-sports-studies/blog/2021/grit_and_athletic_performance.aspx",
  },
  {
    title: "Student Athlete Mental Health: Tips for Parents and Coaches",
    excerpt:
      "Johns Hopkins Medicine outlines how parents and coaches can support student athletes by encouraging balance, fostering healthy coping skills, and helping them navigate the stress and emotional setbacks that come with competitive sport.",
    category: "For Coaches",
    readTime: "6 min read",
    source: "Johns Hopkins Medicine",
    href: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/student-athlete-mental-health",
  },
  {
    title: "How to Master Visualization Techniques to Overcome Game-Time Nerves",
    excerpt:
      "USA Track & Field explores how visualization — the practice of carefully rehearsing a situation in your mind until it feels familiar — helps athletes feel composed when high-pressure moments arrive in competition.",
    category: "Mental Skills",
    readTime: "5 min read",
    source: "USA Track & Field",
    href: "https://www.usatf.org/Campus/Articles/2026/How-to-Master-Visualization-Techniques-to-Overcome",
  },
  {
    title: "Importance of Sports Psychology: A Meta-Analysis of 127 Studies",
    excerpt:
      "A meta-analysis encompassing over 24,000 participants confirms that mental skills training measurably improves athletic performance. The findings link anxiety management to consistency, confidence, and long-term athlete development.",
    category: "Research",
    readTime: "10 min read",
    source: "SportsPhychology.org",
    href: "https://www.sportspsychology.org/articles/importance-of-sports-psychologists/",
  },
  {
    title: "How Athletes Can Build Grit for Sports",
    excerpt:
      "Exploring practical strategies for developing perseverance and passion in athletic contexts — from deliberate practice to growth mindset cultivation. Based on Duckworth's framework applied to youth and competitive sport settings.",
    category: "Mental Skills",
    readTime: "7 min read",
    source: "Exact Sports",
    href: "https://exactsports.com/building-grit-for-sports/",
  },
];

interface BlogGridProps {
  activeCategory: string;
}

export function BlogGrid({ activeCategory }: BlogGridProps) {
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted">
              No resources found for this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="rounded-2xl border border-border-light bg-surface-card p-6 md:p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.1)]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-light">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-text-muted flex items-center gap-1">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-3 group-hover:text-primary-light transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-xs text-text-muted">
                        {post.source}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-light group-hover:gap-2 transition-all">
                        <ExternalLink size={11} />
                        Read
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
