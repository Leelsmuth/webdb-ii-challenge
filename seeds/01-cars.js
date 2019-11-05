exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin_number: 1468972069357,
          make: "Toyota",
          model: "Yaris",
          mileage: 400
        },
        {
          vin_number: 1468972029358,
          make: "Hyundai",
          model: "Accent",
          mileage: 400
        },
        {
          vin_number: 1468972069800,
          make: "Volkswagon",
          model: "Jetta",
          mileage: 400
        },
        {
          vin_number: 1468972069900,
          make: "Peugeout",
          mileage: 400,
          model: "504",
          title_status: "Salvage"
        }
      ]);
    });
};
