const o=t=>{"target"in t&&t.setAttribute("target","_blank")},i="(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))",a=new RegExp(`^(?:tool://|${i})`,"i"),s={namedConfigurations:{toolLinks:{ALLOWED_URI_REGEXP:a}},hooks:{afterSanitizeAttributes:o}};export{s as d};
//# sourceMappingURL=HTMLSanitizer-t5CP4hmt.js.map
