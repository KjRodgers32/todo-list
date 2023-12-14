const { Pool } = require("postgres-pool");

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.DATABASE}`;

const pool = new Pool({
	connectionString: connectionString,
});

module.exports = {
	query: (text: string, params: string) => pool.query(text, params),
	end: () => pool.end(),
};
