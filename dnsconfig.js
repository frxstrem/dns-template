// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI', {
    manage_redirects: true,
});

// Domains:

D('example.com', REG_NONE, DnsProvider(CLOUDFLARE),
    // Ignore records used for Let's Encrypt DNS challenges
    IGNORE('_acme-challenge.**'),

    A('@', '192.0.2.33'),
    CNAME('www', 'example.com.')
);

D('example.net', REG_NONE, DnsProvider(CLOUDFLARE),
    // Ignore records used for Let's Encrypt DNS challenges
    IGNORE('_acme-challenge.**'),

    ALIAS('@', 'example.com.'),
    CNAME('www', 'example.com.')
);
