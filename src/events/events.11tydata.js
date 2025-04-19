export default function() {
  return {
    layout: "layout-event.njk", // Default layout for event pages
    tags: "event", // Tag for the Eleventy collection
    eleventyComputed: {
      // Dynamically generate the permalink based on the event title
      permalink: function(data) {
        // Use the 'title' from front matter
        const slug = data.title;
        // Return the permalink like /events/event-title/
        return `/events/${this.slugify(slug)}/index.html`;
      }
    }
  };
};
