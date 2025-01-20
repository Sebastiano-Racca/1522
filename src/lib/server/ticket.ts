import { TicketStatus, type Ticket } from '@prisma/client';
import prisma from './prisma';

export const createTicket = (
	title: string,
	description: string,
	name: string,
	surname: string,
	email: string | null,
	phone_number: string | null,
	userId?: number
) =>
	prisma.ticket.create({
		data: {
			title,
			description,
			createdBy: userId ? { connect: { id: userId } } : undefined,
			info: {
				connectOrCreate: {
					where: { data: { name, surname, phone_number: phone_number || '', email: email || '' } },
					create: { name, surname, phone_number, email }
				}
			}
		}
	});

export const getTicket = (id: string) =>
	prisma.ticket.findUnique({
		where: { id },
		include: { createdBy: { select: { username: true, id: true } }, info: true }
	});

export const getTicketsFromUser = (userId: number) => prisma.ticket.findMany({ where: { userId } });

export const getPendingTickets = () => prisma.ticket.findMany({ where: { status: 'PENDING' } });

export const updateTicketStatus = (
	id: string,
	status: TicketStatus,
	operatorId: number | undefined = undefined
) => prisma.ticket.update({ where: { id }, data: { status } });

export const updateTicketsStatus = (
	ids: string[],
	status: TicketStatus,
	operatorId: number | null = null
) => prisma.ticket.updateMany({ where: { id: { in: ids } }, data: { status, operatorId } });

export const getTicketsFromOperator = (operatorId: number) =>
	prisma.ticket.findMany({ where: { operatorId }, orderBy: { status: "asc" } });
