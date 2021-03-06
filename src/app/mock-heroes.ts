import { Hero } from './hero';

export const HEROES: Hero[] = [//Data from S3 server
  {
    id: "25",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/25"
    },
    attributes: {
      name: "Doomfist",
      slug: "doomfist",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/doomfist/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/doomfist/splash.jpg",
      updated_at: "2017-09-15T09:36:55.888Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/doomfist/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/25/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/25/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/25/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/25/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/25/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/25/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/25/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/25/hero_role"
        }
      }
    }
  },
  {
    id: "13",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/13"
    },
    attributes: {
      name: "Genji",
      slug: "genji",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/genji/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/genji/splash.jpg",
      updated_at: "2017-09-15T09:36:56.080Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/genji/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/13/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/13/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/13/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/13/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/13/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/13/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/13/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/13/hero_role"
        }
      }
    }
  },
  {
    id: "15",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/15"
    },
    attributes: {
      name: "McCree",
      slug: "mccree",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/mccree/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/mccree/splash.jpg",
      updated_at: "2017-09-15T09:36:56.239Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/mccree/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/15/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/15/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/15/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/15/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/15/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/15/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/15/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/15/hero_role"
        }
      }
    }
  },
  {
    id: "7",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/7"
    },
    attributes: {
      name: "Pharah",
      slug: "pharah",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/pharah/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/pharah/splash.jpg",
      updated_at: "2017-09-15T09:36:56.400Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/pharah/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/7/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/7/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/7/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/7/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/7/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/7/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/7/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/7/hero_role"
        }
      }
    }
  },
  {
    id: "1",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/1"
    },
    attributes: {
      name: "Reaper",
      slug: "reaper",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/reaper/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/reaper/splash.jpg",
      updated_at: "2017-09-15T09:36:56.561Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/reaper/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/1/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/1/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/1/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/1/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/1/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/1/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/1/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/1/hero_role"
        }
      }
    }
  },
  {
    id: "18",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/18"
    },
    attributes: {
      name: "Soldier: 76",
      slug: "soldier_76",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/soldier_76/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/soldier_76/splash.jpg",
      updated_at: "2017-09-15T09:36:56.681Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/soldier_76/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/18/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/18/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/18/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/18/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/18/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/18/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/18/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/18/hero_role"
        }
      }
    }
  },
  {
    id: "23",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/23"
    },
    attributes: {
      name: "Sombra",
      slug: "sombra",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/sombra/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/sombra/splash.jpg",
      updated_at: "2017-09-15T09:36:56.920Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/sombra/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/23/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/23/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/23/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/23/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/23/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/23/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/23/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/23/hero_role"
        }
      }
    }
  },
  {
    id: "2",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/2"
    },
    attributes: {
      name: "Tracer",
      slug: "tracer",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/tracer/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/tracer/splash.jpg",
      updated_at: "2017-09-15T09:36:57.104Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/tracer/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/2/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/2/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/2/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/2/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/2/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/2/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/2/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/2/hero_role"
        }
      }
    }
  },
  {
    id: "10",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/10"
    },
    attributes: {
      name: "Bastion",
      slug: "bastion",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/bastion/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/bastion/splash.jpg",
      updated_at: "2017-09-15T09:36:57.259Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/bastion/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/10/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/10/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/10/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/10/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/10/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/10/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/10/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/10/hero_role"
        }
      }
    }
  },
  {
    id: "4",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/4"
    },
    attributes: {
      name: "Hanzo",
      slug: "hanzo",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/hanzo/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/hanzo/splash.jpg",
      updated_at: "2017-09-15T09:36:57.393Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/hanzo/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/4/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/4/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/4/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/4/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/4/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/4/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/4/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/4/hero_role"
        }
      }
    }
  },
  {
    id: "16",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/16"
    },
    attributes: {
      name: "Junkrat",
      slug: "junkrat",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/junkrat/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/junkrat/splash.jpg",
      updated_at: "2017-09-15T09:36:57.532Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/junkrat/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/16/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/16/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/16/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/16/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/16/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/16/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/16/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/16/hero_role"
        }
      }
    }
  },
  {
    id: "21",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/21"
    },
    attributes: {
      name: "Mei",
      slug: "mei",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/mei/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/mei/splash.jpg",
      updated_at: "2017-09-15T09:36:57.665Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/mei/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/21/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/21/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/21/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/21/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/21/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/21/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/21/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/21/hero_role"
        }
      }
    }
  },
  {
    id: "5",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/5"
    },
    attributes: {
      name: "Torbjörn",
      slug: "torbjorn",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/torbjorn/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/torbjorn/splash.jpg",
      updated_at: "2017-09-15T09:36:57.822Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/torbjorn/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/5/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/5/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/5/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/5/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/5/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/5/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/5/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/5/hero_role"
        }
      }
    }
  },
  {
    id: "9",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/9"
    },
    attributes: {
      name: "Widowmaker",
      slug: "widowmaker",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/widowmaker/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/widowmaker/splash.jpg",
      updated_at: "2017-09-15T09:36:57.971Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/widowmaker/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/9/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/9/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/9/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/9/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/9/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/9/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/9/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/9/hero_role"
        }
      }
    }
  },
  {
    id: "20",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/20"
    },
    attributes: {
      name: "D.Va",
      slug: "d_va",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/d_va/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/d_va/splash.jpg",
      updated_at: "2017-09-15T09:36:58.111Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/d_va/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/20/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/20/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/20/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/20/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/20/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/20/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/20/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/20/hero_role"
        }
      }
    }
  },
  {
    id: "6",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/6"
    },
    attributes: {
      name: "Reinhardt",
      slug: "reinhardt",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/reinhardt/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/reinhardt/splash.jpg",
      updated_at: "2017-09-15T09:36:58.451Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/reinhardt/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/6/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/6/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/6/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/6/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/6/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/6/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/6/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/6/hero_role"
        }
      }
    }
  },
  {
    id: "14",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/14"
    },
    attributes: {
      name: "Roadhog",
      slug: "roadhog",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/roadhog/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/roadhog/splash.jpg",
      updated_at: "2017-09-15T09:36:58.627Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/roadhog/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/14/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/14/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/14/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/14/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/14/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/14/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/14/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/14/hero_role"
        }
      }
    }
  },
  {
    id: "8",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/8"
    },
    attributes: {
      name: "Winston",
      slug: "winston",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/winston/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/winston/splash.jpg",
      updated_at: "2017-09-15T09:36:58.784Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/winston/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/8/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/8/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/8/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/8/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/8/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/8/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/8/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/8/hero_role"
        }
      }
    }
  },
  {
    id: "17",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/17"
    },
    attributes: {
      name: "Zarya",
      slug: "zarya",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/zarya/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/zarya/splash.jpg",
      updated_at: "2017-09-15T09:36:58.981Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/zarya/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/17/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/17/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/17/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/17/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/17/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/17/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/17/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/17/hero_role"
        }
      }
    }
  },
  {
    id: "22",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/22"
    },
    attributes: {
      name: "Ana",
      slug: "ana",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/ana/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/ana/splash.jpg",
      updated_at: "2017-09-15T09:36:59.142Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/ana/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/22/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/22/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/22/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/22/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/22/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/22/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/22/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/22/hero_role"
        }
      }
    }
  },
  {
    id: "19",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/19"
    },
    attributes: {
      name: "Lúcio",
      slug: "lucio",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/lucio/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/lucio/splash.jpg",
      updated_at: "2017-09-15T09:36:59.312Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/lucio/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/19/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/19/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/19/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/19/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/19/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/19/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/19/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/19/hero_role"
        }
      }
    }
  },
  {
    id: "3",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/3"
    },
    attributes: {
      name: "Mercy",
      slug: "mercy",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/mercy/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/mercy/splash.jpg",
      updated_at: "2017-09-15T09:36:59.464Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/mercy/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/3/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/3/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/3/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/3/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/3/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/3/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/3/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/3/hero_role"
        }
      }
    }
  },
  {
    id: "11",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/11"
    },
    attributes: {
      name: "Symmetra",
      slug: "symmetra",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/symmetra/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/symmetra/splash.jpg",
      updated_at: "2017-09-15T09:36:59.643Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/symmetra/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/11/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/11/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/11/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/11/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/11/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/11/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/11/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/11/hero_role"
        }
      }
    }
  },
  {
    id: "12",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/12"
    },
    attributes: {
      name: "Zenyatta",
      slug: "zenyatta",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/zenyatta/portrait.png",
      image_splash: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_splash/zenyatta/splash.jpg",
      updated_at: "2017-09-15T09:36:59.764Z",
      image_card_background: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_card_background/zenyatta/image_card_background.jpg"
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/12/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/12/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/12/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/12/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/12/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/12/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/12/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/12/hero_role"
        }
      }
    }
  },
  {
    id: "24",
    type: "heros",
    links: {
      self: "http://stage.oversumo.com/api/heros/24"
    },
    attributes: {
      name: "Orisa",
      slug: "orisa",
      image_portrait: "https://oversumo-stage.s3-eu-west-1.amazonaws.com/uploads/hero/image_portrait/orisa/portrait.png",
      image_splash: null,
      updated_at: "2017-09-15T09:36:58.266Z",
      image_card_background: null
    },
    relationships: {
      hero_relationships: {
        links: {
          self: "http://stage.oversumo.com/api/heros/24/relationships/hero_relationships",
          related: "http://stage.oversumo.com/api/heros/24/hero_relationships"
        }
      },
      hero_general_tips: {
        links: {
          self: "http://stage.oversumo.com/api/heros/24/relationships/hero_general_tips",
          related: "http://stage.oversumo.com/api/heros/24/hero_general_tips"
        }
      },
      hero_stat_percentiles: {
        links: {
          self: "http://stage.oversumo.com/api/heros/24/relationships/hero_stat_percentiles",
          related: "http://stage.oversumo.com/api/heros/24/hero_stat_percentiles"
        }
      },
      hero_role: {
        links: {
          self: "http://stage.oversumo.com/api/heros/24/relationships/hero_role",
          related: "http://stage.oversumo.com/api/heros/24/hero_role"
        }
      }
    }
  
}
];
