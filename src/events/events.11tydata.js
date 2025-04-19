export default function() {
  return {
    layout: "layout-event.njk", // Default layout for event pages
    tags: "event", // Tag for the Eleventy collection
    eleventyComputed: {
      // Dynamically generate the permalink based on the event file slug
      permalink: function(data) {
        // Use the fileSlug (derived from filename) for uniqueness
        const slug = data.page.fileSlug;
        // Return the permalink like /events/file-slug/
        return `/events/${slug}/index.html`;
      }
    }
  };
};
