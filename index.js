(async () => {
    const token = 'ur token here';

    const response = await fetch(`https://discord.com/api/users/@me/relationships`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': token,
        }
    });

    for (let friends of await response.json()) {
        const { user } = friends;

        await fetch(`https://discord.com/api/users/@me/relationships/${user.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': token,
            }
        });

        console.log(`friend deleted: ${user.username}#${user.discriminator} (${user.global_name})`);
    }
})();
