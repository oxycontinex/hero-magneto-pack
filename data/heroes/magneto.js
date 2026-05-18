function init(hero) {
    hero.setName("Magneto");
    hero.setVersion("Classic");
    hero.setTier(8);

    hero.setHelmet("Head");
    hero.setChestplate("Chest");
    hero.setLeggings("Legs");
    hero.setBoots("Feet");

    hero.addPowers(
        "fiskheroes:controlled_flight",
        "magneto:telekinesis",
        "magneto:magnetic_pulse",
        "magneto:magnetic_shield"
    );
    hero.addAttribute("PUNCH_DAMAGE", 10.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.5, 0);

    hero.addKeyBind("MAGNETIC_PULSE", "key.magnetic_pulse", 1);
    hero.addKeyBind("TELEKINESIS", "key.telekinesis", 2);
    hero.addKeyBind("MAGNETIC_SHIELD", "key.magnetic_shield", 3);

    hero.setDefaultScale(1.05);
}
