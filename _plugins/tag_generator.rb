module Jekyll
  class TagPageGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      site.tags.keys.each do |tag|
        site.pages << TagPage.new(site, site.source, 'tags', tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = "#{tag.downcase.gsub(/\s+/, '-')}.html"

      self.process(@name)
      self.data = {
        'layout' => 'tag',
        'title' => tag,
        'tag' => tag
      }
    end
  end
end 