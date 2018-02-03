export class Hero {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      name: string;
      slug: string;
      image_portrait: string;
      image_splash: string;
      updated_at: string;
      image_card_background: string;
    };
    relationships: {
      hero_relationships: {
        links: {
          self: string;
          related: string;
        }
      },
      hero_general_tips: {
        links: {
          self: string;
          related: string;
        }
      },
      hero_stat_percentiles: {
        links: {
          self: string;
          related: string;
        }
      },
      hero_role: {
        links: {
          self: string;
          related: string;
        }
      }
    }
  }