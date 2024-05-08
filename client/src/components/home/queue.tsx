import { QueueStatus, Queue as QueueType } from '../../../../types/queue';

type Params = {
	queue: QueueType;
	queueStatus: QueueStatus;
};

export default function Queue({ queue, queueStatus }: Params) {
	return (
		<div className='container'>
			<h2>Queue ({QueueStatus[queueStatus]})</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Input</th>
						<th>Output</th>
						<th>Worker</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{queue.map((entry, index) => (
						<tr>
							<th>{index + 1}</th>
							<td>{entry.input}</td>
							<td>{entry.output}</td>
							<td>{entry.worker ? entry.worker : 'N/A'}</td>
							<td>{entry.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
