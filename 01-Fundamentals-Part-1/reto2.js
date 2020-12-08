'use strict';
const avgKoalas = (109 + 95 + 123) / 3;
const avgDolphins = (97 + 112 + 101) / 3;
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(
    `Dolphins won by an average of ${avgDolphins} agaisnt ${avgKoalas}`
  );
} else {
  if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(
      `Koalas won by an average of ${avgKoalas} agaisnt ${avgDolphins}`
    );
  } else {
    if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
      console.log(`Its a tie between Dolphins and Koalas`);
    } else {
      console.log(`No team won this match`);
    }
  }
}
