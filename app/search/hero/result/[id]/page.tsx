// import { Suspense } from "react";

export default function Page({ params }: { params: { id: string } }) {
	const response = fetch(
		`${process.env.API_URL}/api/m?id=${params.id}`,
		{
			next: { revalidate: 10 },
		},
	);

	return response.then((value) => {
		if (value.ok) {
			const data = value.json();
			return data.then((data) => {
				return (
					<div>
						<div>{data.heroes.name}</div>
						<div>{data.heroes.epithet}</div>
						<div>{data.heroes.tags}</div>
						<div>{data.heroes.plusUltra.description}</div>
						<div>{data.heroes.actionSkill1.description}</div>
						<div>{data.heroes.actionSkill2.description}</div>
						<div>{data.heroes.autoSkill1.description}</div>
						<div>{data.heroes.autoSkill2.description}</div>
					</div>
				);
			});
		} else {
			return <div>Not found</div>;
		}
	})
}